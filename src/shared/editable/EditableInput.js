import React from 'react';

export class EditableInput extends React.Component {
  state = {
    isActive: false,
    value: null,
    originValue: null
  };

  componentDidMount() {
    const { entity, entityField } = this.props;
    const value = entity(entityField);

    this.setState({
      value,
      originValue: value
    });
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <input value={value} />
      </div>
    );
  }
}
