import { Title1, Subtitle1, makeStyles } from "@fluentui/react-components";
import siteConfig from "../site";

const useStyles = makeStyles({
  subtitle: {
    display: "block",
    marginTop: "0.5rem", // Optional: Add some margin for better spacing
  },
});

export const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <Title1>
        <a href={siteConfig.website} target="_blank">{siteConfig.name}</a>
      </Title1>
      <Subtitle1 className={classes.subtitle}>
        🤖 RAG - Azure SQL Database 💙 OpenAI
      </Subtitle1>
      <br />
    </div>
  );
};