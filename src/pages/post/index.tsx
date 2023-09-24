import { PostDetailsContainer } from "@/features/post-details/ui/container";
import styles from "./styles.module.css";

export const PostPage = () => {
  return (
    <section className={styles.root}>
      <h2 className={styles.title}> Информация о посте</h2>
      <PostDetailsContainer />
    </section>
  );
};
