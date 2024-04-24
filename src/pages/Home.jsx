import { useStore } from '../stores/GlobalStore';

export default function Home() {
    const { count } = useStore();
    console.log(count());

    return <h1>Hello realm!</h1>;
}
