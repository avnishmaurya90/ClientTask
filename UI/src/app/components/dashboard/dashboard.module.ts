import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { AuthInterceptor } from 'src/app/services/auth.interceptor';
import { SocketService } from 'src/app/services/socket.service';
import { ChatComponent } from '../chat/chat.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { HeaderComponent } from '../layout/header/header.component';
import { MenuComponent } from '../menu/menu.component';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared.module';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'chat', component: ChatComponent },
];

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    MenuComponent,
    ChatComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatToolbarModule,
    MatMenuModule,
    MatExpansionModule,
    SharedModule
  ],
  providers: [SocketService],
})
export class DashboardModule {}
