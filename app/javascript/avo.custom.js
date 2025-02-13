import { Application } from '@hotwired/stimulus'
import NestedForm from '@stimulus-components/rails-nested-form';
const application = Application.start()
application.register('nested-form', NestedForm)
console.log('Hi from Avo custom JS 👋')