function requiredValidator(rule, value, callback) {
    if (value === '' || !value) {
        if (rule.field == "userName") {
            callback(new Error(rule.vue.$t('pls_input_username')));
        }
        if (rule.field == "password") {
            callback(new Error(rule.vue.$t('pls_input_password')));
        }
        if (rule.msg) {
            callback(new Error(rule.msg));
        } else {
            callback(new Error(rule.vue.$t('pls_input_params')));
        }
    }
    callback();
}

var emailReg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
var phoneReg = /^((0\d{2,3}-\d{7,8})|(1[3456789]\d{9}))$/;

function emailValidator(rule, value, callback) {
    if (value === '' || !value) {
        if (rule.field == "userName") {
            callback(new Error(rule.vue.$t('pls_input_username')));
        }
        if (rule.field == "password") {
            callback(new Error(rule.vue.$t('pls_input_password')));
        }
        if (rule.msg) {
            callback(new Error(rule.msg));
        } else {
            callback(new Error(rule.vue.$t('pls_input_params')));
        }
    }

    if (!emailReg.test(value)) {
        callback(new Error(rule.vue.$t('email_format_error')));
    }
    callback();
}

function phoneValidator(rule, value, callback) {
    if (value === '' || !value) {
        if (rule.field == "userName") {
            callback(new Error(rule.vue.$t('pls_input_username')));
        }
        if (rule.field == "password") {
            callback(new Error(rule.vue.$t('pls_input_password')));
        }
        if (rule.msg) {
            callback(new Error(rule.msg));
        } else {
            callback(new Error(rule.vue.$t('pls_input_params')));
        }
    }

    if (!phoneReg.test(value)) {
        callback(new Error(rule.vue.$t('phone_format_error')));
    }
    callback();
}

function requiredSelectValidator(rule, value, callback) {
    if (value === '' || !value || !value.length) {
        if (rule.field == "userName") {
            callback(new Error(rule.vue.$t('pls_select_username')));
        }
        if (rule.field == "password") {
            callback(new Error(rule.vue.$t('pls_select_password')));
        }
        if (rule.name) {
            callback(new Error(rule.vue.$t('pls_select_') + rule.vue.$t(rule.name)));
        } else {
            callback(new Error(rule.vue.$t('pls_select')));
        }
    }
    callback();
}

function hostnameValidator(rule, value, callback) {
    if (value === '' || !value) {
        callback(new Error(rule.vue.$t('pls_input_hostname')));
    }
    if (/[^0-9a-zA-Z\-]+/.test(value)) {
        callback(new Error(rule.vue.$t('hostname_must_not_have_invalid_word')));
    }
    callback();
}

function ipValidator(rule, value, callback) {
    if (value === '' || !value) {
        callback(new Error(rule.vue.$t('cannt_be_null')));
    }
    if (!/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(value)) {
        callback(new Error(rule.vue.$t('ip_invalid_format')));
    }
    callback();
}

export {
    requiredValidator, hostnameValidator, ipValidator, requiredSelectValidator, emailValidator, phoneValidator
}