import { ViewContainer, BodyContainer } from '../components/Containers';
import { Navbar } from '../components/Navbar';
import { CreateSnippet } from '../components/CreateSnippet';

export const Create = () => {
  return(
    <ViewContainer>
      <Navbar />
      <BodyContainer>
        <CreateSnippet />
      </BodyContainer>
    </ViewContainer>
  )
}