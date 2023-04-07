import { useState, useEffect} from 'react';
import { getSnippets } from '../utils/axios';
import styled from '@emotion/styled';
import { COLORS } from '../utils/constants';
import { SnippetProps } from '../utils/types';

export const Snippets = () => {
  const [snips, getSnips] = useState<SnippetProps[]>([]);

  useEffect(() => {
    (async () => {
      const res = await getSnippets();
      getSnips(res);
    })();
  }, []);

  return(
    <SnippetList>
      {snips.map(snip => (
        <SnippetContainer>
          {snip.text}
          <SnippetSignWrapper>
            <Stretcher />
          <SnippetSign>- {snip.sign}</SnippetSign>
          </SnippetSignWrapper>
        </SnippetContainer>
      ))}
    </SnippetList>
  )
}

/**Top level snippet list container */
const SnippetList = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/** Container for individual snippets */
const SnippetContainer = styled.div`
  margin: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid;
  border-color: ${COLORS.text};
  border-radius: 5px;
  border-width: thin;
`;

/** Container for snippet text body */
const SnippetBody = styled.div`

`;

/** Wrapper for signer so it sticks to the right side */
const SnippetSignWrapper = styled.div`
  margin: 10px 0px 0px 0px;
  width: 100%;
  display: flex;
  align-items: center;
`;

/** Container for snippet signer */
const SnippetSign = styled.div`
  color: ${COLORS.text};
`;

/** Fake component to make sign text align right  */
const Stretcher = styled.div`
  flex-grow: 1;
`;