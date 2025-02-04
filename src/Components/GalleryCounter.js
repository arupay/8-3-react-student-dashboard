import React from "react";

class GalleryCounter extends React.Component {
  render() {
    const { filteredStudents, cohort } = this.props;
    return (
      <div>
        <h2>{cohort}</h2>
        Total Students: {filteredStudents.length}
      </div>
    );
  }
}

export default GalleryCounter;
