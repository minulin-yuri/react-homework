import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

export default function LimitSelect({ limit, onChange }) {
    return (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Выводить по:</InputLabel>
            <Select
                defaultValue="5"
                value={limit}
                onChange={onChange}
                label="Limit"
                variant="standard"
            >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
            </Select>
        </FormControl>
    )
}