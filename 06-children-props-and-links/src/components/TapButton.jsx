// deno-lint-ignore-file
export default function TabButton ({ children }) {
    function handleClick () {
        console.log("Hello click");
    }

    return ( 
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    );
}