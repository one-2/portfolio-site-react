import styles from "./page.module.css";
import Link from 'next/link'

// TODO: add live decoding/rendering on hover.

export default function Home() {
  // Hex code: 57 65 20 6C 69 76 65 20 69 6E 20 61 20 66 75 74 75 72 65 20 66 65 77 20 69 6D 61 67 69 6E 65 64 20 70 6F 73 73 69 62 6C 65 2E
  return (
    <main className={styles.main}>
    
      <div className={styles.description}
        style={{paddingLeft:'3%', paddingTop:'1%', paddingBottom:'1%'}}>
          <h1>Hello.</h1>
      </div>

      <div className={styles.grid} style={{}}>
        <p>57</p>
        <p>65</p>
        <p>20</p>
        <Link href='learningMachines' className={styles.pop}>Learning Machines</Link>
        <p>6C</p>
        <p>69</p>
        <p>76</p>
        <p>65</p>

        <p>20</p>
        <p>69</p>
        <p>6E</p>
        <p>20</p>
        <p>61</p>
        <Link href='blog' className={styles.pop}>Blog</Link>
        <p>20</p>
        <p>66</p>

        <p>75</p>
        <p>74</p>
        <p>75</p>
        <p>72</p>
        <Link href='modeling' className={styles.pop}>Modeling</Link>
        <p>65</p>
        <p>20</p>
        <p>66</p>

        <p>65</p>
        <p>77</p>
        <p>20</p>
        <Link href='webDevelopment' className={styles.pop}>Web Dev</Link>
        <p>69</p>
        <p>6D</p>
        <p>61</p>
        <p>67</p>

        <p>69</p>
        <p>6E</p>
        <p>65</p>
        <p>64</p>
        <p>20</p>
        <Link href='resume' className={styles.pop}>Resume</Link>
        <p>70</p>
        <p>6F</p>

        <p>73</p>
        <p>73</p>
        <p>69</p>
        <p>62</p>
        <p>6C</p>
        <p>65</p>
        <p>2E</p>
        <Link href='contact' className={styles.pop}>Contact</Link>
      </div>

    </main>
  );
}
