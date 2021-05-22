import React from "react"
import Button from '@material-ui/core/Button';

export default function NavBar({children}: any) {
    return (
        <div>
            <div className="flex w-full justify-center">
                <Button color="secondary" variant="contained">
                    teste
                </Button>
                <h1>me</h1>
            </div>
            {children}
        </div>
    )
}
