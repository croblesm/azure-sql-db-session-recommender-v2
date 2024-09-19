import { Suspense } from "react";
import { Await, LoaderFunction, defer, useLoaderData } from "react-router-dom";
import ls from "localstorage-slim";
import { getSessionsCount } from "../api/sessions";
import { FancyText } from "../components/FancyText";
import siteConfig from "../site";

function showSessionCount(
  sessionsCount: string | undefined | null = undefined
) {
  var sc = sessionsCount;
  if (sc === undefined) {
    sc = ls.get("sessionsCount");
    console.log("sessionsCount", sc);
  } else {
    ls.set("sessionsCount", sc, { ttl: 60 * 60 * 24 * 7 });
  }
  if (sc == null) {
    return <FancyText>Loading session count...</FancyText>;
  }
  return (
    <FancyText>
      Se encuentran <a href={siteConfig.website}>{sc} sesiones indexadas</a> hasta ahora.
    </FancyText>
  );
}

export const loader: LoaderFunction = async () => {
  const sessionsCount = getSessionsCount();
  return defer({ sessionsCount });
};

export const About = () => {
  const { sessionsCount } = useLoaderData() as {
    sessionsCount: string | number;
  };

  return (
    <>
      <FancyText>
        El código fuente y los artículos relacionados están <a href="https://github.com/Azure-Samples/azure-sql-db-session-recommender-v2">disponibles en GitHub.</a>{" "}
        El modelo de IA utilizado para generar embeddings es <i>text-embedding-ada-002</i> y el modelo de IA utilizado para procesar y generar contenido en lenguaje natural es <i>gpt-35-turbo</i>.
      </FancyText>
      <Suspense fallback={showSessionCount()}>
        <Await
          resolve={sessionsCount}
          errorElement={
            <FancyText>No se puede cargar el conteo de sesiones 😥...</FancyText>
          }
        >
          {(sessionsCount) => showSessionCount(sessionsCount)}
        </Await>
      </Suspense>
    </>
  );
};
