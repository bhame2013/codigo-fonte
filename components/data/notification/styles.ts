import styled from "styled-components";

interface NotificationProps {
  notificationPosition?: {
    top?: boolean;
    right?: boolean;
    bottom?: boolean;
    left?: boolean;
    triangle?: "lateral" | "top-left" | "top-right";
  };
}

function ReturnTransform(position: NotificationProps): string {
  const top = position.notificationPosition?.top;
  const bottom = position.notificationPosition?.bottom;
  const left = position.notificationPosition?.left;
  const right = position.notificationPosition?.right;

  if (bottom && top && right) {
    return "translateY(-50%) translateX(calc(100% + 15px))";
  }

  if (top && left) {
    return "translateY(calc(-100% + 20px)) translateX(calc(0% + 20px))";
  }

  if (top && right) {
    return "translateY(calc(-100% + 20px)) translateX(100%)";
  }

  if (bottom && left) {
    return "translateY(calc(100% + 10px)) translateX(calc(0% + 10px))";
  }

  if (bottom && right) {
    return "translateY(100%) translateX(100%)";
  }

  if (bottom && top && left) {
    return "translateY(-50%) translateX(0%)";
  }

  return 'unset'
}

export const Notification = styled.div<NotificationProps>`
  position: relative;

  .box-notification {
    position: absolute;
    top: ${(props) => (props.notificationPosition?.top && props.notificationPosition.bottom ? "50%" : props.notificationPosition?.top ? '0' : 'unset')};
    bottom: ${(props) => (props.notificationPosition?.top && props.notificationPosition.bottom ? "unset" : props.notificationPosition?.bottom ? '0' : 'unset')};
    right: ${(props) => (props.notificationPosition?.right ? "0" : "unset")};
    left: ${(props) => (props.notificationPosition?.left ? "0" : "unset")};
    transform: ${(props) => ReturnTransform(props)};
    width: 204px;
    background-color: #fff;
    padding:6px 10px 8px;
    border-radius: 8px;

    h4 {
      line-height: 19px;
      color: #fff;
      margin-bottom: 3px;
    }

    p {
      color: var(--theme-color);
      margin-bottom: 0;
      line-height: 17px;
      margin-top: -3px;
    }
  }

  .box-notification::before {
    content: "";
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #fff;
    position: absolute;
    top: ${props => props.notificationPosition?.triangle === 'lateral' ? '50%' : '-7px'};
    left: ${props => props.notificationPosition?.triangle === 'lateral' ? '-12px' : '8px' };
    transform: ${props => props.notificationPosition?.triangle === 'lateral' ? 'rotate(-90deg) translateX(4px)' : 'unset' };
  }
`;
