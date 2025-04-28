import { ResponseStatus } from 'hooks/api/model';
import { styled } from 'styled-components';

export const NotificationContainerJss = styled.div<{ status: ResponseStatus, open?: boolean }>`
    background-color: ${props => {
    switch (props.status) {
      case 'success':
        return '#d4edda';
      case 'error':
        return '#f8d7da';
      case 'warning':
        return '#fff3cd';
      default:
        return '#d1ecf1';
    }
  }};
    border: 1px solid ${props => {
    switch (props.status) {
      case 'success':
        return '#c3e6cb';
      case 'error':
        return '#f5c6cb';
      case 'warning':
        return '#ffeeba';
      default:
        return '#bee5eb';
    }
  }};
    color: ${props => {
    switch (props.status) {
      case 'success':
        return '#155724';
      case 'error':
        return '#721c24';
      case 'warning':
        return '#856404';
      default:
        return '#0c5460';
    }
  }};
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
    display: ${props => props.open ? 'block' : 'none'};
`;
