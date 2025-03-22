import countries from "../../utils/third-world.ts";

export default function Datalist(props: {
    onChange: (event: any) => void;
    alreadySelectedCountries: string[];
    selected: string;
}) {
    return (
        <select
            id="countries"
            onChange={props.onChange}
            className="border-2 border-slate-200 rounded-md m-3 p-2"
        >
            <option
                value="default"
                selected={props.selected === ""}
                disabled
                hidden
            >
                Pays sélectionné
            </option>
            {countries.map((country: string, index: number) => {
                const alreadySelected =
                    props.alreadySelectedCountries.includes(country);
                return (
                    <option
                        key={index}
                        value={country}
                        selected={props.selected === country}
                        disabled={alreadySelected}
                    >
                        {country}
                    </option>
                );
            })}
        </select>
    );
}
