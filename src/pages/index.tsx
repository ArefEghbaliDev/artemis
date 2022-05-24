import ContainedButton from 'components/UI/Button/ContainedButton';
import type { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <ContainedButton type="button" isLoading={true} color="primary">
                Click Me
            </ContainedButton>
        </div>
    );
};

export default Home;
