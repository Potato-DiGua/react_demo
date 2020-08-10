import React from 'react';

interface DialogState {
    onClick: () => void;
    msg: string;
    visibility: "hidden" | "visible";
}
export class Dialog extends React.Component<any> {
    state: DialogState;
    constructor(porps: any) {
        super(porps);
        this.state = {
            msg: this.props.value,
            onClick: this.props.onClick,
            visibility: "visible"
        }
    }
    show() {
        if (this.state.visibility !== "visible") {
            this.setState({
                msg: this.state.msg,
                onClick: this.state.onClick,
                visibility: "visible"
            })
        }
    }
    hidden() {
        if (this.state.visibility !== "hidden") {
            this.setState({
                msg: this.state.msg,
                onClick: this.state.onClick,
                visibility: "hidden"
            })
        }
    }

    render() {
        return (
            <div className="dialog_bg" style={{ 'visibility': this.state.visibility }}>
                <div className="dialog">
                    <h3>提示</h3>
                    <p>{this.state.msg}</p>
                    <button onClick={() => this.state.onClick()}>确定</button>
                </div>
            </div>
        )
    }
