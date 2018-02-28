import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { environment } from '../../environments/environment';

@Directive ( {
  selector: '[inRole]'
} )
export class RoleDirective {
  get inRole (): string {
    return this._inRole;
  }

  @Input ()
  set inRole ( value: string ) {
    this._inRole = value;
    const access = this.hasRolePermission( value );
    if ( access && ! this._hasView ) {
      // template init.
      this.viewContainer.createEmbeddedView( this.templRef );
      this._hasView = true;
    } else if ( !access && this._hasView ) {
      // remove template
      this.viewContainer.clear();
      this._hasView = false;
    }
  }

  private _hasView = false;
  private _inRole: string;

  constructor ( private templRef: TemplateRef,
                private viewContainer: ViewContainerRef ) {
  }

  hasRolePermission ( role: string ): boolean {
    return role === environment.role;
  }

}
