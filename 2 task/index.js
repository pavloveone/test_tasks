const widgets = document.querySelector('#widgets');
const dashboard = document.querySelector('#dashboard');
const skypeAudit = document.querySelector('#skype-audit')
const crm = document.querySelector('#CRM')

if(window.screen.width === 320) {
    widgets.textContent = 'skype аудит';
    dashboard.textContent = '30 виджетов';
    skypeAudit.textContent = 'dashboard';
    crm.textContent = 'месяц AMOCRM'
}