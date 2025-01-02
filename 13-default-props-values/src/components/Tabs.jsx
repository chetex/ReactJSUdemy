/**
 * Children are the content of the tabs
 * Buttons are the buttons to select the tabs inside {} 
 * @param {} param0 
 * @returns 
 */
export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      <div className="tabs">
        {children}
      </div>
    </>
  );
}