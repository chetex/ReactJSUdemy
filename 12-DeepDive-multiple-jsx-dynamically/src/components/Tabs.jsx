/**
 * Children are the content of the tabs
 * Buttons are the buttons to select the tabs inside {} 
 * @param {} param0 
 * @returns 
 */
export default function Tabs ({ children, buttons }) {
  return (
    <>
        <menu>{buttons}</menu>
        <div className="tabs">
        {children}
        </div>
    </>
  );
}