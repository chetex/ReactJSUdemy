// deno-lint-ignore-file
export default function TabButton ({ children, onSelect }) {
    return ( 
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
}