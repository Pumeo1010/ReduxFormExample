import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';

// Validate

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Require valid username';
  } else if (values.username.length > 20) {
    errors.username = 'Username must be equal or less than 20 characters';
  }
  if (!values.email) {
    errors.email = 'Require valid email address';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const submit = values => {
  alert(`Validation successed. Value = ${JSON.stringify(values)}`);
};

const renderField = ({
  name,
  label,
  keyboardType,
  autoCapitalize,
  autoCorrect,
  meta: { touched, error, warning },
  input: { onChange, ...restInput }
}) => (
  <View style={styles.inputView}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      name={name}
      style={styles.input}
      keyboardType={keyboardType}
      onChangeText={onChange}
      {...restInput}
      autoCapitalize={autoCapitalize}
      autoCorrect={autoCorrect}
    />
    {touched && ((error && <Text style={styles.error}>{error}</Text>) ||
    (warning && <Text style={styles.warning}>{warning}</Text>))}
  </View>
);

export const Contact = props => {
  const { handleSubmit } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>REGISTRATION</Text>
      <Field
        name="username"
        label="Username "
        component={renderField}
        keyboardType="default"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Field
        name="email"
        label="Email "
        component={renderField}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Field
        name="age"
        label="Age "
        component={renderField}
        keyboardType="number-pad"
      />
      <View style={styles.button}>
        <TouchableOpacity
          onPress={handleSubmit(submit)}
        >
          <Text style={styles.txtButton}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ContactForm = reduxForm({
  form: 'contact'
})(Contact);

export default ContactForm;

const styles = StyleSheet.create({
  inputView: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    padding: 10
  },
  input: {
    width: 230,
    height: 40,
    padding: 10,
    borderColor: '#23b7ff',
    borderWidth: 1.5
    // borderRadius: 15
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 40,
    justifyContent: 'flex-start'
  },
  button: {
    margin: 10,
    alignItems: 'center'
  },
  txtButton: {
    backgroundColor: '#23b7ff',
    color: '#FFF',
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 50,
    textAlign: 'center',
    fontWeight: '700'
  },
  header: {
    fontSize: 20,
    fontWeight: '800',
    alignSelf: 'center',
    paddingVertical: 20
  },
  error: {
    color: '#FF0000'
  },
  warning: {
    color: '#FFA500'
  }
});
