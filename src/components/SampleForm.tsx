import { Form, FormGroup, Input, Panel } from '@bigcommerce/big-design';
import React, { useState } from 'react';
import { Field, Form as FinalForm } from 'react-final-form';

import { ModalInput } from './ModalInput';

export const SampleForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  function onSubmit(...rest: unknown[]) {
    console.log('wasd', rest);

    return undefined;
  }

  function validateCustomVal(val?: string) {
    console.log('inside validate', val);

    return val === undefined ? 'Required' : undefined;
  }

  return (
    <Panel header="Sample form">
      <FinalForm
        initialValues={{
          custom: undefined,
          phone: '123',
        }}
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <h2>Render Function as Children</h2>
            <Field<string> name="phone">
              {({ input, meta }) => (
                <div>
                  {/* <label>Phone</label>
                <input type="text" {...input} placeholder="Phone" /> */}
                  <FormGroup>
                    <Input label="Foo bar" onChange={input.onChange} value={input.value} />
                  </FormGroup>
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            </Field>

            <Field<string> name="custom" validate={validateCustomVal}>
              {({ input, meta }) => (
                <div>
                  Modal component input
                  <button onClick={() => setIsOpen(true)} type="button">
                    Open Modal
                  </button>
                  <ModalInput
                    isOpen={isOpen}
                    onClose={(output) => {
                      console.log('onClose', output);
                      input.onChange(output);

                      setIsOpen(false);
                    }}
                  />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            </Field>

            <button type="submit">Submit</button>
          </Form>
        )}
      />
    </Panel>
  );
};
