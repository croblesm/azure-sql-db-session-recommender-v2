import {
  Card,
  Textarea,
  TextareaProps,
  makeStyles,
  Spinner,
  Title2
} from "@fluentui/react-components";
import { SendRegular } from "@fluentui/react-icons";
import { useState } from "react";
import { ActionFunctionArgs, isRouteErrorResponse, useFetcher, useRouteError } from "react-router-dom";
import { ask } from "../api/chat";
import { FancyText } from "../components/FancyText";
import { PrimaryButton } from "../components/PrimaryButton";
import ReactMarkdown from "react-markdown";

var isThinking:boolean = false;
var intervalId = 0
var thinkingTicker = 0;
var thinkingMessages:string[] = [
  "Analizando la pregunta...",
  "Pensando...",
  "Consultando la base de datos...",
  "Extrayendo embeddings...",
  "Buscando vectores en el espacio latente...", 
  "Identificando el contexto...", 
  "Analizando resultados...",  
  "Encontrando la mejor respuesta...", 
  "Formulando la respuesta...",
  "Revisando la respuesta...",
  "Corrigiendo errores ortográficos...",
  "Haciendo una revisión interna...",
  "Verificando errores...",
  "Validando la respuesta...",
  "Añadiendo más contexto...",
  "Analizando la respuesta potencial...",
  "Releyendo la pregunta original...",
  "Añadiendo más detalles...",
  "Mejorando la respuesta...",
  "Puliendo la respuesta...",
  "Eliminando errores tipográficos...",
  "Añadiendo puntuación...",
  "Revisando la gramática...",
  "Añadiendo contexto...",
  "Enviando la respuesta..."
]

const useClasses = makeStyles({
  container: {},
  chatArea: {},
  card: {},
  rm: { marginBottom: "-1em", marginTop: "-1em"},
  answersArea: { marginTop: "1em"},
  textarea: { width: "100%", marginBottom: "1rem" },
});

export async function action({ request }: ActionFunctionArgs) {
  let formData = await request.formData();
  const prompt = formData.get("prompt");
  if (!prompt) {
    return null;
  }

  const data = await ask(prompt.toString());
  return data;
}

const Answers = ({ data }: { data: Awaited<ReturnType<typeof action>> }) => {
  if (!data) {
    return null;
  }
  const components = [];
  const classes = useClasses();
  
  var cid:number = 0
  for (const id in data) { cid = Number(id) }
  const [question, answer] = data[cid];    
      
  components.push(
    <Card key={cid} className={classes.card}>        
      <Title2 as="h2" block={true} style={{ marginBottom: "0em", marginTop:"0px" }}>Tu pregunta</Title2>
      <FancyText>
        {question.question}
      </FancyText>
      <Title2 as="h2" block={true} style={{ marginBottom: "0em" }}>Mi respuesta</Title2>
      <FancyText>
        <ReactMarkdown className={classes.rm}>{answer?.answer}</ReactMarkdown>
      </FancyText>
      <Title2 as="h2" block={true} style={{ marginBottom: "0em" }}>Mi opinión</Title2>
      <FancyText>
        {answer?.thoughts}
      </FancyText>
    </Card>
  );

  return <>{components}</>;
};

export const Chat = () => {
  const fetcher = useFetcher<Awaited<ReturnType<typeof action>>>();
  const classes = useClasses();

  const [thinking, setThinking] = useState(thinkingMessages[0]);
  const [prompt, setPrompt] = useState("");

  const submitting = fetcher.state !== "idle";
  const data = fetcher.data;  

  const onChange: TextareaProps["onChange"] = (_, data) =>
    setPrompt(() => data.value);

  const onKeyDown: TextareaProps["onKeyDown"] = (e) => {
    if (!prompt) {
      return;
    }

    if (e.key === "Enter" && !e.shiftKey) {
      const formData = new FormData();
      formData.append("prompt", prompt);
      fetcher.submit(formData, { method: "POST" });      
    }
  };

  if (submitting && !isThinking) {
    isThinking = true;
    thinkingTicker = 0;
    setThinking(thinkingMessages[thinkingTicker]);
    const updateThinking = () => {     
      thinkingTicker += 1;   
      var i = thinkingTicker > thinkingMessages.length - 1 ? 0 : thinkingTicker;
      setThinking(thinkingMessages[i]);      
    }
    intervalId = setInterval(updateThinking, 2000);
  }

  if (!submitting && isThinking) {
    isThinking = false;
    clearInterval(intervalId);
    setThinking(thinkingMessages[0]);
  }

  return (
    <div className={classes.container}>
      <div>
        <FancyText>
        <>
          Haz preguntas al modelo de IA en lenguaje natural y obtén respuestas útiles que te ayudarán a explorar y seleccionar las sesiones de esta conferencia! Aprende más sobre los speakers de <a href="https://med.gt" target="_blank">Microsoft Experience Day 2024 (MED)</a> y explora temas que más se ajusten a tus intereses.
          <p>
            Gracias a <a href="https://en.wikipedia.org/wiki/Prompt_engineering" target="_blank">Prompt engineering</a> y <a href="https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview" target="_blank">Retrieval Augmented Generation (RAG)</a>, 
            ahora es más fácil que nunca encontrar detalles y recomendaciones sobre a qué sesión asistir.
          </p>
        </>
        </FancyText>        
      </div>
      <div className={classes.chatArea}>
        <fetcher.Form method="POST">
          <Textarea
            className={classes.textarea}
            resize="vertical"
            size="large"
            placeholder="Haz una pregunta ..."
            name="prompt"
            id="prompt"
            disabled={submitting}
            onChange={onChange}
            value={prompt}
            onKeyDown={onKeyDown}
          ></Textarea>
          <PrimaryButton
            icon={<SendRegular />}
            disabled={submitting || !prompt}
          >
            Pregunta
          </PrimaryButton>
          {submitting && <Spinner label={thinking} />}
        </fetcher.Form>        
      </div>
      <div className={classes.answersArea}>
        {!submitting && data && <Answers data={data} />}
      </div>
    </div>
  );
};

export const ChatError = () => {
  const error = useRouteError();
  console.error(error);
  if (isRouteErrorResponse(error)) {
    return(
    <div>
      <Title2>
      {error.status} - {error.statusText} {error.data.statusText}
      </Title2>
      <FancyText>
        Sorry, there was a problem while processing your request. Please try again.
      </FancyText>
    </div>
    )
  }
  else {
    throw error;
  }
}