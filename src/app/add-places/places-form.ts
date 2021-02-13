import { FormGroup,FormControl,Validators } from "@angular/forms";
export const PLACES_FORM={
    create:()=>{
        return new FormGroup({
            state:new FormControl('',[Validators.required]),
            city:new FormControl('',[Validators.required]),
            alley:new FormControl('',[Validators.required]),
        })
    }
}