import ReactDOM from "react-dom";
import styled from "styled-components";
import ContainerComponent from "../../types/ContainerComponent";
import StyledComponent from "../../types/StyledComponent";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`

const ModalWrapper = styled.div`
  position: fixed;
  top: 20vh;
  left: 5%;
  width: 90%;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;

  @media (min-width: 768px) {
    width: 40rem;
    left: calc(50% - 20rem); 
  }

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const ModalContent = styled.div`
`

function ModalOvarlay({ children, className }: ContainerComponent & StyledComponent) {
  return (
    <ModalWrapper className={className}>
      <ModalContent>{children}</ModalContent>
    </ModalWrapper>
  );
}

interface ModalProps extends ContainerComponent {
  onClose?: () => void
}

function Modal({ children, onClose }: ModalProps) {
  const portal = document.getElementById('overlays')!

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={() => onClose && onClose()} />, portal)}
      {ReactDOM.createPortal(<ModalOvarlay>{children}</ModalOvarlay>, portal)}
    </>
  );
}

export default Modal;
