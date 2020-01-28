import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'


const routes = [
  { path: '/main',
    exact: true,
    sidebar: () => <div>This text is generated from Lorem ipsum</div>,
    main: () => <h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat feugiat vehicula. Donec sed venenatis urna. Aenean pharetra porttitor hendrerit. Nulla tempor mollis velit, ut vulputate sem placerat at. Nullam felis augue, dictum non tempus at, vehicula quis quam. Maecenas blandit posuere placerat. Proin elementum tincidunt ex, non tincidunt tellus finibus et. Morbi eget erat sagittis, sagittis velit ac, elementum justo.</p>
          </h3>
        },
    
  { path: '/ipsum',
    sidebar: () => <div>This text is generated from Lorem ipsum
    </div>,
    main: () => <h3><p>Aliquam erat volutpat. Fusce mattis lorem purus, id faucibus mauris mollis vitae. Sed vel convallis sapien. Proin id condimentum nibh. Nullam et convallis urna, sed tempus velit. Sed hendrerit interdum enim id tincidunt. Etiam ut turpis ut leo scelerisque sollicitudin. Ut pulvinar nisl dui, in pretium lorem rutrum in. Praesent interdum augue id arcu pharetra blandit. Nulla porta tellus in elit ultrices consequat.</p>
    </h3>
  },
  

  { path: '/ipsum/job',
  
    main: () => <myfont>
    <p>Sed nec est eget tortor scelerisque hendrerit et quis ante. Proin dui sapien, ultricies nec maximus quis, ultrices eget nisi. Nunc faucibus aliquet massa id semper. Proin consequat nibh sit amet urna posuere finibus. Cras hendrerit, massa fringilla suscipit mattis, mauris quam posuere leo, tincidunt porta sem dui vel ante. Proin ut sem sed est commodo vehicula ut eu lectus. Nullam in aliquam nibh. Cras ultrices quam facilisis nunc fringilla eleifend. In hac habitasse platea dictumst. Sed sed eros bibendum, efficitur magna vitae, rutrum urna. Proin posuere malesuada vulputate. Suspendisse laoreet tellus orci. Fusce porta tristique massa, a vulputate metus lacinia et. Aenean pharetra augue vel velit varius molestie. Quisque justo nibh, ullamcorper sit amet blandit et, dapibus ut est.
    </p></myfont>
  },
  { path: '/ipsum/really',
    
    main: () => <myfont><p> Proin dui sapien, ultricies nec maximus quis, ultrices eget nisi. Nunc faucibus aliquet massa id semper. Proin consequat nibh sit amet urna posuere finibus. Cras hendrerit, massa fringilla suscipit mattis, mauris quam posuere leo, tincidunt porta sem dui vel ante. Proin ut sem sed est commodo vehicula ut eu lectus. Nullam in aliquam nibh. Cras ultrices quam facilisis nunc fringilla eleifend. In hac habitasse platea dictumst. Sed sed eros bibendum, efficitur magna vitae, rutrum urna. Proin posuere malesuada vulputate. Suspendisse laoreet tellus orci. Fusce porta tristique massa, a vulputate metus lacinia et. Aenean pharetra augue vel velit varius molestie. Quisque justo nibh, ullamcorper sit amet blandit et, dapibus ut est.</p>
    <p>Sed nec est eget tortor scelerisque hendrerit et quis ante. Proin dui sapien, ultricies nec maximus quis, ultrices eget nisi. Nunc faucibus aliquet massa id semper. Proin consequat nibh sit amet urna posuere finibus. Cras hendrerit, massa fringilla suscipit mattis, mauris quam posuere leo, tincidunt porta sem dui vel ante. Proin ut sem sed est commodo vehicula ut eu lectus. Nullam in aliquam nibh. Cras ultrices quam facilisis nunc fringilla eleifend. In hac habitasse platea dictumst. Sed sed eros bibendum, efficitur magna vitae, rutrum urna. Proin posuere malesuada vulputate. Suspendisse laoreet tellus orci. Fusce porta tristique massa, a vulputate metus lacinia et. Aenean pharetra augue vel velit varius molestie. Quisque justo nibh, ullamcorper sit amet blandit et, dapibus ut est.
    </p></myfont>
  },
  { path: '/ipsum/bad',

    main: () => <myfont>
    <p>Phasellus vel nisl gravida, cursus turpis nec, malesuada turpis. Suspendisse quis neque eget nisi sollicitudin dignissim et rhoncus est. Quisque lorem lacus, sollicitudin et luctus at, mattis non sem. Curabitur eu congue odio, sit amet facilisis mi. Donec et pretium augue, quis pharetra neque. Fusce interdum tellus sit amet libero facilisis lacinia. Praesent faucibus mauris et tellus aliquam dapibus. Duis aliquam erat eget ipsum mattis commodo. Curabitur efficitur rhoncus justo. Nam purus lacus, tincidunt eget leo nec, interdum faucibus lectus. Nunc pretium dui ut sem placerat, nec laoreet leo vulputate. Ut in libero laoreet, consectetur enim id, cursus dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.


    </p></myfont>
  },
 
  { path: '/randomshit/',
    sidebar: () => <div>This text is generated from Lorem ipsum
    </div>,
    main: () => <h3><p>Maecenas lobortis nibh augue, dictum molestie enim rutrum non. Maecenas lobortis dapibus justo, vel lacinia libero semper ut. Vivamus nec magna in lacus dapibus suscipit eu non massa. Morbi nec tincidunt lorem, a ultricies turpis. Donec accumsan dictum est eu dictum. Sed rutrum sollicitudin turpis, sit amet consequat enim tristique eu. Vestibulum at elit pulvinar, pulvinar sem non, ornare sapien. Nunc aliquam pellentesque erat, sed vehicula nulla accumsan euismod.
</p></h3>
  },
  { path: '/randomshit/please',

  main: () => <myfont>
  <p>In quis ex pharetra, condimentum mi eu, posuere tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla ut tincidunt sapien. Integer sed lacinia mauris, quis ullamcorper lorem. Etiam convallis urna nisi, sed sodales eros pharetra interdum. Nullam posuere sagittis tellus, id convallis tortor lacinia ac. Nulla eros leo, auctor a rhoncus a, ultrices nec leo. Sed non consequat ante. Morbi luctus tortor mi, in tristique ligula eleifend non. Duis felis quam, laoreet quis risus sed, maximus aliquet nisi. In hac habitasse platea dictumst. Integer pretium dolor in dui maximus, aliquam consequat libero pulvinar. Ut porttitor purus vitae ipsum sagittis pharetra. Mauris sit amet ligula ac enim viverra imperdiet vitae vel metus. Sed eget erat diam.

  </p></myfont>
},
{ path: '/randomshit/pleaseplease',

  main: () => <myfont>
  <p>Suspendisse non enim eu erat semper venenatis ut a arcu. Suspendisse accumsan erat non sapien varius sodales. Morbi est diam, vulputate quis libero ut, tincidunt tempus elit. Nunc semper luctus augue, vel sodales nibh lobortis non. Sed porttitor massa vel ex iaculis, a condimentum felis mattis. Aliquam nec ultrices mauris, in dapibus velit. Quisque eget libero pellentesque, elementum lectus venenatis, condimentum erat. Morbi bibendum, nisi lacinia malesuada elementum, ipsum turpis pretium massa, vel semper dolor sem ut eros. Nunc id consequat odio. Sed at magna a nisl rhoncus finibus. Maecenas id ante vulputate, efficitur odio id, faucibus nibh.

  </p></myfont>
}

  
]

class App extends React.Component {
  render() {
    return (
      <Router>
        <div style={{ display: 'flex' }}>
          <div style={{
            padding: '10px',
            width: '20%',
            background: '#f0f0f0'
          }}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
            <h1>Dave's attempt</h1>
              <li><Link to="/main">1.Blah Blah black sheep</Link></li>
              <li><Link to="/ipsum">2. ipsum dipsum</Link></li>
              <ul>
              <li><Link to="/ipsum/job">2.1 The preson </Link></li>
              <li><Link to="/ipsum/really">2.2 who is reading</Link></li>
              <li><Link to="/ipsum/bad">2.3 this text is AWESOME!</Link></li>
              </ul>
              <li><Link to="/randomshit">3. Puts some random text</Link></li>
              <ul>
              <li><Link to="/randomshit/please">2.1 Randomtext </Link></li>
              <li><Link to="/randomshit/pleaseplease">2.2 More Randomtext</Link></li>
              </ul>
            </ul>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))}
          </div>
  
          <div style={{ flex: 1, padding: '10px' }}>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </div>
        </div>
        
      </Router>
    )
  }
}

export default App