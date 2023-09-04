import React, { useState } from "react";
import "./Accordion.css"
const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion">
        <div className="accordion-item">
          <div
            className={`accordion-header ${activeIndex === 0 ? "active" : ""}`}
            onClick={() => handleAccordionClick(0)}
          >
            JSX
          </div>
          {activeIndex === 0 && (
            <div className="accordion-content">
              JSX (JavaScript XML) là một phần mở rộng cú pháp của JavaScript
              được sử dụng trong ReactJS để viết các thành phần giao diện người
              dùng. JSX cho phép bạn kết hợp cú pháp XML hoặc HTML với
              JavaScript để xây dựng các cây phân cấp của các thành phần React.
            </div>
          )}
        </div>
        <div className="accordion-item">
          <div
            className={`accordion-header ${activeIndex === 1 ? "active" : ""}`}
            onClick={() => handleAccordionClick(1)}
          >
            Prop
          </div>
          {activeIndex === 1 && (
            <div className="accordion-content">
              Prop (viết tắt của "properties") trong ReactJS là một cách để
              truyền dữ liệu từ một thành phần cha xuống thành phần con. Prop
              được sử dụng để truyền các giá trị và chức năng từ một thành phần
              cha tới các thành phần con của nó.
            </div>
          )}
        </div>
        <div className="accordion-item">
          <div
            className={`accordion-header ${activeIndex === 2 ? "active" : ""}`}
            onClick={() => handleAccordionClick(2)}
          >
            ReactJS
          </div>
          {activeIndex === 2 && (
            <div className="accordion-content">
              ReactJS là một thư viện JavaScript phổ biến được phát triển bởi
              Facebook để xây dựng giao diện người dùng (UI) tương tác và đáng
              tin cậy trong ứng dụng web. Nó tập trung vào việc tạo ra các thành
              phần UI độc lập, mà sau đó được kết hợp để xây dựng các giao diện
              phức tạp.
            </div>
          )}
        </div>
     
    </div>
  );
};

export default Accordion;
