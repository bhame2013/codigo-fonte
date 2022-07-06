import * as S from "./styles";

interface NotificationProps {
  title?: string;
  message?: string;
  notificationPosition?: {
    top?: boolean;
    right?: boolean;
    bottom?: boolean;
    left?: boolean;
    triangle?: "lateral" | "top-left" | "top-right";
  };
  children?: React.ReactNode;
}

export function NotificationComponent({
  title,
  message,
  children,
  notificationPosition,
}: NotificationProps) {
  return (
    <S.Notification notificationPosition={notificationPosition}>
      {children}

      {(title || message) && (
        <div className="box-notification">
          {title && <h4 className="paragraph-3-bold-graphie">{title}</h4>}
          {message && <p className="paragraph-3-bold-graphie">{message}</p>}
        </div>
      )}
    </S.Notification>
  );
}
