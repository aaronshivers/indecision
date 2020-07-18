import styled from 'styled-components';
import { lighten } from 'polished';
import styleSettings from '../../style-settings';

const { colors, sizes } = styleSettings;

const WidgetHeader = styled.header`
  background-color: ${colors.blue};
  color: ${colors.offWhite};
  display: flex;
  justify-content: space-between;
  padding: ${sizes.medium};
`;

const Title = styled.h3`
  margin: 0;
`;

const Message = styled.p`
  color: ${colors.offWhite};
  margin: 0;
  padding: ${sizes.large};
  text-align: center;
  border-bottom: 1px solid ${lighten(0.1, colors.lightBlue)};
`;

export {
  WidgetHeader,
  Title,
  Message,
};
