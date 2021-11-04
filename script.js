let rgba = new RGBA(`
    vec2 m = mouse/resolution + vec2(sin(time), cos(time))/10.,
          pt = gl_FragCoord.xy,
          q = (pt+pt-resolution)/resolution.y/m.y;
          for(int i=0; i!=13; i++)
              q = -abs(q)/dot(q,q) + m;
    gl_FragColor = vec4(vec3(q.r+q.g), 7.);
`, {
    uniforms: {
        mouse: '2f'
    }
});

rgba.mouse([innerWidth/4, innerHeight/4])

addEventListener('mousemove', e => rgba.mouse([e.x, e.y]))