import {
    ValidationControllerFactory,
    ValidationController,
    ValidationRules
} from 'aurelia-validation';
import { inject } from 'aurelia-dependency-injection';
import { AureliaUXFormRenderer } from './forms-form-renderer';

@inject(ValidationControllerFactory)
export class Forms {
    public firstName = '';
    public lastName = '';
    public email = '';
    public controller: ValidationController = null;

    constructor(public controllerFactory: ValidationControllerFactory) {
        this.controller = controllerFactory.createForCurrentScope();
        this.controller.addRenderer(new AureliaUXFormRenderer());
    }

    submit() {
        this.controller.validate().then((value) => {
            if(value.valid) {
                alert('Form submitted!');
            } else {
            }
        });
    }

}

ValidationRules
    .ensure('firstName').required().minLength(2)
    .ensure('lastName').required().minLength(2)
    .ensure('email').required().email()
    .on(Forms); 