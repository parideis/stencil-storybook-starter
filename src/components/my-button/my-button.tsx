import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true
})
export class MyButton {
  @Prop() theme: 'plain' | 'primary' | 'secondary' | 'danger';
  /**
   * Style des Button
   */
  @Prop() variant: 'basic' | 'raised' | 'outline' | 'flat';
  /**
   * Inhalt des Button
   */
  @Prop() label: string = "Basic";
  @Prop() color: string;
  /**
   * Deaktivierung des Button
   */
  @Prop() disabled: boolean;

  render() {
    return (
      <button
        class={`${this.variant} ${this.theme}`}
        style={this.color ? { backgroundColor: this.color } : null}
        disabled={this.disabled}
      >
        {this.label}
      </button>
    );
  }
}
