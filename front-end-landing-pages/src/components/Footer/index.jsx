import { SectionContainer } from '../SectionContainer';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';
import P from 'prop-types';


export const Footer = ({ html }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent>
          {html}
        </TextComponent>
      </SectionContainer>
    </Styled.Container>
  );
}

Footer.propTypes = {
  html: P.string.isRequired,
};

