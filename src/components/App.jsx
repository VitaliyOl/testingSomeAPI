import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { MaterialForm } from './MaterialForm/MaterialForm';
import * as API from '../services/API';
import { Materials } from './materials/materials';

import React, { Component } from 'react';

export class App extends Component {
  state = {
    materials: [],
    isLoading: false,
    error: false,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const materials = await API.getMaterials();
      this.setState({ materials, isLoading: false });
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  }

  addMaterials = async values => {
    try {
      const material = await API.addMaterial(values);
      this.setState(prevState => ({
        materials: [...prevState.materials, material],
      }));
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  };

  deleteComponent = async id => {
    try {
      await API.deleteMaterials(id);
      this.setState(prevState => ({
        materials: prevState.materials.filter(material => material.id !== id),
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  updateMaterial = async fields => {
    try {
      const updateMaterial = await API.updateMaterials(fields);
      this.setState(prevState => ({
        materials: prevState.materials.map(material =>
          material.id === fields.id ? updateMaterial : material
        ),
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  render() {
    const { isLoading, materials, error } = this.state;
    return (
      <Layout>
        <GlobalStyle />
        {error && <p>Ooops...</p>}

        <MaterialForm onSubmit={this.addMaterials} />
        {isLoading ? (
          'Loading...'
        ) : (
          <Materials
            items={materials}
            onDelete={this.deleteComponent}
            onUpdate={this.updateMaterial}
          />
        )}
      </Layout>
    );
  }
}
