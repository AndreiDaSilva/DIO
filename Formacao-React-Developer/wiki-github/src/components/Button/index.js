import React from 'react'

export default function Button({ icon, conteund }) {
    return (
        <>
            <Button variant="contained" endIcon={icon}>
                {conteund}
            </Button>
        </>
    )
}
