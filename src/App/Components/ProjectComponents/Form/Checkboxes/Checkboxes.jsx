import './Checkboxes.css';

export function Checkboxes({ list, onChange }) {
    return list.map((item) => {
        return (
            <div key={item.fieldName} className="checkboxes__item">
                <div
                    className={`checkboxes__item__check-mark ${item.isChecked ? 'checkboxes__item__check-mark--checked' : ''}`}
                    onClick={() => {
                        onChange(item.fieldName, !item.isChecked);
                    }}
                >
                    {item.isChecked && <>&#10003;</>}
                </div>
                <div className="checkboxes__item__text">
                    {item.label}
                </div>
            </div>
        );
    });
}