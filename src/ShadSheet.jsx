import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


function ShadSheet(props) {
    return (
        <div className='mx-[90px]'>
            <Sheet>
                <SheetTrigger>{props.strigger}</SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>{props.stitle}</SheetTitle>
                        <SheetDescription>
                            {props.sdescrption}
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </div>
    )
}

export default ShadSheet