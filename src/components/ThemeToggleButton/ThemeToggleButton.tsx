import IconButton from "@mui/material/IconButton";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import React from "react";
import {useTheme} from "@mui/system";
import {useMediaQuery} from "@mui/material";

export type ThemeToggleButtonProps = {
    ColorModeContext: React.Context<{ toggleColorMode: () => void; }>,
}

const ThemeToggleButton = (props: ThemeToggleButtonProps) => {
    const mobileCheck = useMediaQuery('(min-width: 500px)');
    const {    ColorModeContext = React.createContext({ toggleColorMode: () => {} })} = props;
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    return (
        <>
            <IconButton sx={{mr: 2}} title={theme.palette.mode + ' mode'} aria-label={theme.palette.mode + ' mode button'} onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <DarkModeOutlinedIcon/> : <LightModeOutlinedIcon/>}
            </IconButton>
        </>)
}

export default ThemeToggleButton;