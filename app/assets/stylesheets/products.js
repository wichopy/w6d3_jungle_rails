import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'main sectionproducts-index products': {
    'display': 'flex',
    'flexDirection': 'row',
    'flexWrap': 'wrap',
    'justifyContent': 'space-around'
  },
  'main sectioncategories-show products': {
    'display': 'flex',
    'flexDirection': 'row',
    'flexWrap': 'wrap',
    'justifyContent': 'space-around'
  },
  'main sectionproducts-index products product': {
    'maxWidth': [{ 'unit': 'px', 'value': 260 }],
    'position': 'relative',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRadius': '5px',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 80 }],
    'marginTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'main sectioncategories-show products product': {
    'maxWidth': [{ 'unit': 'px', 'value': 260 }],
    'position': 'relative',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRadius': '5px',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 80 }],
    'marginTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'main sectionproducts-index products product header img': {
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'maxHeight': [{ 'unit': 'px', 'value': 140 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'display': 'block'
  },
  'main sectioncategories-show products product header img': {
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'maxHeight': [{ 'unit': 'px', 'value': 140 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'display': 'block'
  },
  'main sectionproducts-index products product footer': {
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'backgroundColor': '#EEE',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'borderBottomLeftRadius': '5px',
    'borderBottomRightRadius': '5px',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'opacity': '0.3',
    'transition': 'all 0.3s'
  },
  'main sectioncategories-show products product footer': {
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'backgroundColor': '#EEE',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'borderBottomLeftRadius': '5px',
    'borderBottomRightRadius': '5px',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'opacity': '0.3',
    'transition': 'all 0.3s'
  },
  'main sectionproducts-index products product asideprice': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'backgroundColor': '#eee',
    'borderTopRightRadius': '4px',
    'borderBottomLeftRadius': '20px',
    'fontSize': [{ 'unit': 'em', 'value': 0.8 }]
  },
  'main sectioncategories-show products product asideprice': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'backgroundColor': '#eee',
    'borderTopRightRadius': '4px',
    'borderBottomLeftRadius': '20px',
    'fontSize': [{ 'unit': 'em', 'value': 0.8 }]
  },
  'main sectionproducts-index products product asidesold-out': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'backgroundColor': 'red',
    'borderTopLeftRadius': '4px',
    'borderBottomRightRadius': '20px',
    'fontSize': [{ 'unit': 'em', 'value': 0.8 }],
    'font': [{ 'unit': 'string', 'value': 'white' }]
  },
  'main sectioncategories-show products product asidesold-out': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'backgroundColor': 'red',
    'borderTopLeftRadius': '4px',
    'borderBottomRightRadius': '20px',
    'fontSize': [{ 'unit': 'em', 'value': 0.8 }],
    'font': [{ 'unit': 'string', 'value': 'white' }]
  },
  'main sectionproducts-index products product:hover': {
    'borderColor': '#999'
  },
  'main sectioncategories-show products product:hover': {
    'borderColor': '#999'
  },
  'main sectionproducts-index products product:hover footer': {
    'opacity': '1.0'
  },
  'main sectioncategories-show products product:hover footer': {
    'opacity': '1.0'
  },
  'main sectionproducts-show product-detail imgmain-img': {
    'maxWidth': [{ 'unit': '%H', 'value': 1 }]
  }
});
