import styled from 'styled-components';
import { lighten } from 'polished';
import styleSettings from '../../style-settings';

const { sizes, colors } = styleSettings;

const Wrapper = styled.div`
  border-bottom: 1px solid ${lighten(0.1, colors.primary)};
  display: flex;
  justify-content: space-between;
  padding: ${sizes.large} ${sizes.medium};
`;

const Text = styled.p`
  color: white;
  font-weight: 500;
  font-size: 2rem;
  margin: 0;
  word-break: break-all;
`;

export {
  Wrapper,
  Text,
};
