import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/components/login/login.component";
import { RegisterComponent } from "./auth/components/register/register.component";
import { NgModule } from "@angular/core";

const routes:Routes=[
    {
        path:"",
        children:[
            {path:"login",component:LoginComponent},
            {path:"register",component:RegisterComponent},
            {path:"",redirectTo:"login",pathMatch:"full"}
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class CoreRoutingModule{}