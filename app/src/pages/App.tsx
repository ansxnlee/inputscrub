import { ViewContainer, BodyContainer } from '../components/Containers';
import { Navbar } from '../components/Navbar';
import { Snippets } from '../components/Snippets';

export const App = () => {
  return (
    <ViewContainer>
      <Navbar />
      <BodyContainer>
        <Snippets />
      </BodyContainer>
    </ViewContainer>
  );
}
