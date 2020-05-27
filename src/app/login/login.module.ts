import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { UsersService } from "./../shared/services/users.service";
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { BlockUIModule } from 'ng-block-ui';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        FormsModule,
        BlockUIModule.forRoot(),
        LoginRoutingModule],
    declarations: [LoginComponent],
    providers: [UsersService]
})
export class LoginModule {}
