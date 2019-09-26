import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-input',
  styleUrl: 'my-input.css',
  shadow: true
})
export class MyInput {
  /**
   * Describes the requirements for the input
   */
  @Prop() instructions: string;
  /**
   *  Input Label
   */
  @Prop() label: string;
  /**
   * Input Name
   */
  @Prop() name: string;
  /**
   * Input Type
   */
  @Prop() type: string;

  render() {
    /* Force Instructions for Label */
    if (this.instructions) {
      return (
        <div>
          <label htmlFor={this.name}>{this.label}</label>
          <input
            type={this.type}
            name={this.name}
            id={this.name}
            aria-describedby="instructions"
          />
          <p id="instructions">{this.instructions}</p>
        </div>
      );
    } else {
      console.info('Please add instructions');
    }
  }
}
