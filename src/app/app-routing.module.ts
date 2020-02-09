import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ResetComponent} from "./reset/reset.component";
import {HomeComponent} from "./home/home.component";
import {ProfilComponent} from "./profil/profil.component";
import {DiscussionShortcutComponent} from "./discussion-shortcut/discussion-shortcut.component";
import {EditComponent} from "./edit/edit.component";
import {EditFormComponent} from "./edit-form/edit-form.component";
import {PremiumComponent} from "./premium/premium.component";
import {PublicityPageComponent} from "./publicity-page/publicity-page.component";
import {PostManagementComponent} from "./post-management/post-management.component";
import {SellManagementComponent} from "./sell-management/sell-management.component";
import {AlertManagementComponent} from "./alert-management/alert-management.component";
import {DeliveryComponent} from "./delivery/delivery.component";
import {NotificationComponent} from "./notification/notification.component";
import {WorldComponent} from "./world/world.component";
import {MessageComponent} from "./message/message.component";
import {MobileInboxComponent} from "./mobile-inbox/mobile-inbox.component";
import {MessageWebComponent} from "./message-web/message-web.component";
import {SearchUserComponent} from "./search-user/search-user.component";
import {MobilePostFormComponent} from "./mobile-post-form/mobile-post-form.component";
import {MobileSellFormComponent} from "./mobile-sell-form/mobile-sell-form.component";
import {MobileAlertFormComponent} from "./mobile-alert-form/mobile-alert-form.component";
import {BuySpaceComponent} from "./buy-space/buy-space.component";
import {MbPpAdFormComponent} from "./mb-pp-ad-form/mb-pp-ad-form.component";
import {MbPpSellFormComponent} from "./mb-pp-sell-form/mb-pp-sell-form.component";
import {MbPpAlertFormComponent} from "./mb-pp-alert-form/mb-pp-alert-form.component";
import {SharePublicationSpaceComponent} from "./share-publication-space/share-publication-space.component";
import {LoginStep2Component} from "./login-step2/login-step2.component";
import {TopProductSpaceComponent} from "./top-product-space/top-product-space.component";
import {ChangePasswordComponent} from "./change-password/change-password.component";
import {ActivationAccountComponent} from "./activation-account/activation-account.component";
import { AuthGuardService } from './services/guard/auth-guard.service';
import {ContactsComponent} from './contacts/contacts.component';
import {HelpComponent} from './help/help.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'reset', component: ResetComponent },
  // { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },

  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'profil', component: ProfilComponent, canActivate: [AuthGuardService] },
  { path: 'discussionShortcut', component: DiscussionShortcutComponent, canActivate: [AuthGuardService] },
  { path: 'edit', component: EditComponent, canActivate: [AuthGuardService] },
  { path: 'editForm', component: EditFormComponent, canActivate: [AuthGuardService] },
  { path: 'premium', component: PremiumComponent, canActivate: [AuthGuardService] },
  { path: 'publicity', component: PublicityPageComponent, canActivate: [AuthGuardService] },
  { path: 'post', component: PostManagementComponent, canActivate: [AuthGuardService] },
  { path: 'sell', component: SellManagementComponent, canActivate: [AuthGuardService] },
  { path: 'alert', component: AlertManagementComponent, canActivate: [AuthGuardService] },
  { path: 'delivery', component: DeliveryComponent, canActivate: [AuthGuardService] },
  { path: 'notifications', component: NotificationComponent, canActivate: [AuthGuardService] },
  { path: 'world', component: WorldComponent, canActivate: [AuthGuardService] },
  { path: 'chats', component: MessageComponent, canActivate: [AuthGuardService] },
  { path: 'inbox', component: MobileInboxComponent, canActivate: [AuthGuardService] },
  { path: 'amsterne', component: MessageWebComponent, canActivate: [AuthGuardService] },
  { path: 'search', component: SearchUserComponent, canActivate: [AuthGuardService] },
  { path: 'post-form', component: MobilePostFormComponent, canActivate: [AuthGuardService] },
  { path: 'sell-form', component: MobileSellFormComponent, canActivate: [AuthGuardService] },
  { path: 'alert-form', component: MobileAlertFormComponent, canActivate: [AuthGuardService] },
  { path: 'buy', component: BuySpaceComponent, canActivate: [AuthGuardService] },
  { path: 'premium-ad-form', component: MbPpAdFormComponent, canActivate: [AuthGuardService] },
  { path: 'premium-sell-form', component: MbPpSellFormComponent, canActivate: [AuthGuardService] },
  { path: 'premium-alert-form', component: MbPpAlertFormComponent, canActivate: [AuthGuardService] },
  { path: 'share', component: SharePublicationSpaceComponent, canActivate: [AuthGuardService] },
  { path: 'confirm', component: LoginStep2Component, canActivate: [AuthGuardService] },
  { path: 'product', component: TopProductSpaceComponent, canActivate: [AuthGuardService] },
  { path: 'change-password', component: ChangePasswordComponent, canActivate: [AuthGuardService] },
  { path: 'activation', component: ActivationAccountComponent   },
  {path: 'contacts', component: ContactsComponent},
  {path: 'help', component: HelpComponent},
  { path: '**', redirectTo: '/login', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rootingComponents = [LoginComponent, ResetComponent, HomeComponent, ProfilComponent, DiscussionShortcutComponent, EditFormComponent, PremiumComponent, PublicityPageComponent, PostManagementComponent, SellManagementComponent, AlertManagementComponent, DeliveryComponent, HelpComponent, ContactsComponent]
