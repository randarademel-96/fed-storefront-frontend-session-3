import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

import React from 'react'

function ShadCollapsible(props) {
    return (
        <div className="p-4 flex">
            <Collapsible>
                <CollapsibleTrigger>
                    {props.trigger}
                </CollapsibleTrigger>
                <CollapsibleContent>
                    {props.content1}
                </CollapsibleContent>
                <CollapsibleContent>
                    {props.content2}
                </CollapsibleContent>
            </Collapsible>
        </div>

    )
}

export default ShadCollapsible