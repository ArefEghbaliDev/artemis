import type { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <button type="button" className="px-3 py-2 border-none bg-primary-500 flex rounded">
                Click Me
            </button>
        </div>
    );
};

export default Home;
