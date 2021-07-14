import { useState } from "react";
import { FiChevronsDown, FiChevronsUp } from "react-icons/fi";

export default function OrderItem() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="accordion-custom">
      <div className="accordion-custom-header" onClick={handleExpanded}>
        <div>
          {!isExpanded ? (
            <FiChevronsDown
              size={20}
              style={{
                cursor: "pointer",
              }}
            />
          ) : (
            <FiChevronsUp
              size={20}
              style={{
                cursor: "pointer",
              }}
            />
          )}
          <span className="accordion-custom-header-span-status">
            Entrega realizada
          </span>
        </div>
        <span>
          entregue dia{" "}
          <span
            style={{
              color: "#40cd28",
            }}
          >
            19/abril
          </span>
        </span>
      </div>
      <hr />

      <div>
        Produto
        {isExpanded && <p>adasdas</p>}
      </div>
    </div>
  );
}
