import { PostListContainer } from "@/features/post-list/ui/container";
import styles from "./styles.module.css";

export const HomePage = () => {
  return (
    <section className={styles.root}>
      <h1 className={styles.title}>Список постов:</h1>
      <PostListContainer />
    </section>
  );
};
